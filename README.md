# 🧩 React Components

## 📌 What are React Components?

React **components** are **independent**, **reusable** pieces of UI code that help break down the user interface into smaller, manageable parts. You can use a component **anywhere** in your website or application.

---

## ⚙️ Key Rules

✅ Each component **must start with an uppercase letter** (e.g., `MyComponent`)  
This is how React knows it's a component and **not** a regular HTML tag.

❌ `mycomponent` → ❌ Not recognized as a component  
✅ `MyComponent` → ✅ Correct usage

---

## 🛠️ Example

```jsx
// ✅ A simple functional component
function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Using the component
<Welcome />
