# C++ for Firmware — Pocket Reference

## Brace Initialization

```cpp
// Direct initialization (what you'll see in firmware)
int x = 5;
PID_t pid = {0};

// Brace initialization (modern, safer — prevents narrowing)
int x{5};
PID_t pid{};
float arr[]{1.0, 2.0, 3.0};

// Why braces: this won't compile (narrowing conversion)
int x = 3.14;  // compiles, x = 3
int x{3.14};   // error: narrowing
```

## Enum vs Enum Class

```cpp
// Plain enum — leaks names into surrounding scope
enum PID_MODE { PID_POSITION, PID_DELTA };
int PID_POSITION = 5;  // error: name collision!

// Enum class — scoped, type-safe
enum class MotorType { GM6020, M3508, M2006 };
MotorType t = MotorType::GM6020;  // must qualify
int x = MotorType::GM6020;        // error: no implicit conversion
```

## Class vs Struct

```cpp
// Struct — everything public by default (use for data)
struct PIDConfig {
    float Kp, Ki, Kd;
    float max_out;
};

// Class — everything private by default (use for behavior)
class PIDController {
    float Kp_, Ki_, Kd_;
    float error_[3] = {};
public:
    PIDController(float Kp, float Ki, float Kd) 
        : Kp_{Kp}, Ki_{Ki}, Kd_{Kd} {}  // member initializer list
    
    float calculate(float set, float ref);
};
```

## Member Initializer Lists

```cpp
class Gimbal {
    PIDController yaw_pid_;
    MotorType type_;
    float offset_;
public:
    // Initializer list — members are initialized BEFORE the body runs
    Gimbal(MotorType type, float offset) 
        : yaw_pid_{0.5, 0.01, 0.1}  // calls PIDController constructor
        , type_{type}
        , offset_{offset} 
    {
        // body is empty — everything already initialized above
        // bad: yaw_pid_ = PIDController(0.5, 0.01, 0.1);  // default-constructs THEN assigns
    }
};
```

## Const and Constexpr

```cpp
// const — runtime constant (can be set at runtime, can't change after)
const float PI = 3.14159f;

// constexpr — compile-time constant (must be known at compile time)
constexpr float PI = 3.14159f;
constexpr float DEG_TO_RAD = PI / 180.0f;

// constexpr function — runs at compile time if inputs are known
constexpr float sq(float x) { return x * x; }
float arr[sq(5)];  // OK: sq(5) computed at compile time

// const pointer — the data can't change
const int* ptr;     // pointer to const int (data is const)
int* const ptr;     // const pointer to int (pointer can't move)
```

## References

```cpp
// Reference — alias to existing variable (like a pointer that can't be null)
void set_pid(PID_t& pid, float Kp) {  // no copy, no null check needed
    pid.Kp = Kp;
}

// Const reference — read-only view (standard for params)
float get_kp(const PID_t& pid) {
    return pid.Kp;  // can't modify pid
}
```

## Namespaces

```cpp
namespace calibur {
    namespace gimbal {
        constexpr float ANGLE_LIMIT = 45.0f;
    }
}

// Usage
float limit = calibur::gimbal::ANGLE_LIMIT;

// Or bring it in
using calibur::gimbal::ANGLE_LIMIT;

// Never: using namespace std;  // especially not in firmware headers
```

## Common Firmware Patterns

```cpp
// Static — persistent across function calls (like a global, but scoped)
// In C, this is how PID state is stored without classes
int counter() {
    static int count = 0;  // initialized once, keeps value between calls
    return count++;
}

// Volatile — tells compiler "this value can change outside this code"
// Used for hardware registers, ISR-shared variables
volatile uint32_t system_tick;

// Extern — declares a variable defined in another file
// Used for globals shared across .c/.cpp files
extern PID_t gimbal_pid;  // defined in Gimbal_Task.c
```

## Useful STL for Firmware

```cpp
#include <array>       // Fixed-size array (replaces C arrays)
#include <optional>    // Maybe-contains-a-value
#include <cstdint>     // uint32_t, int16_t, etc.

// array — knows its size, no pointer decay
std::array<float, 3> gains = {1.0, 0.5, 0.1};
gains.size();  // 3 — no need for #define ARRAY_LEN(x)

// optional — explicit "no value" handling
std::optional<float> read_sensor() {
    if (sensor_ok) return 4.2f;
    return std::nullopt;  // no magic number like -1
}
```

## Compilation Model

```cpp
// .h file — declarations only (what other files can use)
#ifndef GIMBAL_H
#define GIMBAL_H
void gimbal_init();
float gimbal_get_angle();
#endif

// .c/.cpp file — definitions (the implementation)
#include "gimbal.h"
static float current_angle;  // static = file-local, not visible outside

void gimbal_init() { current_angle = 0.0f; }
float gimbal_get_angle() { return current_angle; }
```

## Quick Syntax Reference

| You want | C way | C++ way |
|---|---|---|
| Fixed array | `float arr[5];` | `std::array<float,5> arr;` |
| Empty check | `if (!ptr)` | `if (!opt.has_value())` |
| Named constant | `#define PI 3.14` | `constexpr float PI = 3.14;` |
| Avoid magic numbers | `#define MAX_OUT 100` | `constexpr float max_out = 100;` |
| Type aliases | `typedef float fp32;` | `using fp32 = float;` |
| Function-like macro | `#define MAX(a,b) ((a)>(b)?(a):(b))` | `template<T> constexpr T max(T a, T b) { return a > b ? a : b; }` |
