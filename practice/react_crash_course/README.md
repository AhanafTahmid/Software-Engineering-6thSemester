## Tutorial

## Notes

kebab-case, snake case, PascalCase
anything inside {} is javascript, else html
Using class instead of className
must name function with capital letters

React hooks like useState must be called inside a functional component, not at the top level of your file.


Pro Tips
Component Design Principles
1. Single Responsibility: Each component should do one thing well
2. Reusability: Design components to be used in multiple places
3. Composition over Inheritance: Build complex UIs by combining simple
components
4. Props Interface: Always define TypeScript interfaces for props
File Naming Conventions
• PascalCase for component files: UserProfile.tsx
• Match the component name: UserProfile component in UserProfile.tsx
• Use descriptive names: SubmitButton.tsx instead of Button.tsx  

Props Best Practices
1. Always define TypeScript interfaces
2. Use destructuring for cleaner code
3. Provide default values

State vs Props
Props:
- Data passed from parent to child
- Read-only (cannot be modified by child)
- Like function parameters
State:
- Data managed within a component
- Can be modified using setter functions
- Triggers re-render when changed

Different Types of State
1. Simple Values
2. Objects
interface User {
name: string
email: string
age: number
}
const [user, setUser] = useState<User>({
name: '',
email: '',
age: 0

3. Arrays

State Updates are Async
setCount(count + 1);
console.log(count); // ❗ Still logs the old value

Use the functional update form if you depend on the previous state:
setCount(prevCount => prevCount + 1);


Event Handling