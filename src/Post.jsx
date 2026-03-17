export default function Post({ post }) {
    const { title, body } = post;
    return (
        <div className="card">
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
}