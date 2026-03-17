/**
 * Components
 * JSX
 * Props
 * State
 * Events
 * [Conditional Rendering]
 */

/**
 * 1. API : url("https://jsonplaceholder.typicode.com/users")
 * 
 */

/**
 * 1. just write a simple fetch with json conversion
 * 2. wrap the data loading component under suspense
 * 
 */


/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => loadData(data));

const loadData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}*/