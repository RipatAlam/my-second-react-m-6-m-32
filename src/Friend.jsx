export default function Friend({ friend }) {
    console.log(friend);
    const {name, username, email, phone, website} = friend;
    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}