---
title: "Modern C++ for Rust/Go Developers"
date: 2024-05-04
category: systems
---

# Modern C++ for Rust/Go Developers

A quick-reference for transitioning from high-level/safe languages to Modern C++ (17/20) for robotics.

## The Mental Model Mapping

| Feature | Rust Equivalent | Modern C++ | Why it matters in Robotics |
| :--- | :--- | :--- | :--- |
| **Ownership** | `Box<T>` | `std::unique_ptr<T>` | Deterministic cleanup without GC. |
| **Shared Ref** | `Arc<T>` | `std::shared_ptr<T>` | Passing sensor data to multiple nodes. |
| **View** | `&str` | `std::string_view` | High-perf log parsing (no copies). |
| **Error** | `Result<T, E>` | `std::expected<T, E>` | Clean error paths without exceptions. |
| **Sequence** | `Vec<T>` | `std::vector<T>` | The default for trajectory buffers. |

## Key Differences

### 1. RAII vs. Drop
C++ doesn't have a borrow checker, but RAII (Resource Acquisition Is Initialization) ensures that when a class instance goes out of scope, its destructor is called. This is how you manage hardware handles (GPIO, PWM).

### 2. Header Files
Unlike Rust/Go, C++ uses `.hpp` (headers) for declarations and `.cpp` for implementations.
- **Tip**: Keep your headers clean. Only include what is necessary.

### 3. Namespaces
Use `namespace` to avoid name collisions in large robotics stacks.
```cpp
namespace Calibur::Sensors {
    class IMU { ... };
}
```
