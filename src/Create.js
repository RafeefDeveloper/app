import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };
  return (
    <div className="create">
      <h2 className="mt-3">Add New Blog</h2>
      <Form onSubmit={handleSubmit} style={{ width: 600, margin: "auto" }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Title Blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Wtrite Here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Form.Select
          aria-label="author"
          className="mb-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Open this select author</option>
          <option value="Ahamad">Ahamad</option>
          <option value="Ali">Ali</option>
          <option value="Aseel">Aseel</option>
        </Form.Select>
        <Button type="submit">Add Blog</Button>
      </Form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
