import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography, Link, Grid, Box } from "@mui/material";
import Navbar from "./Navbar";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const API_KEY = "AIzaSyDo7J4ArnQYRExJsgN7n9UzPmCOhmmT6Sk";

  const searchBooks = async () => {
    if (!query) return;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Search Books About the Universe
      </Typography>
      <Box display="flex" justifyContent="center" marginBottom="20px">
        <TextField
          label="Enter keyword"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginRight: "10px", width: "400px" }}
        />
        <Button variant="contained" color="primary" onClick={searchBooks}>
          Search
        </Button>
      </Box>

      <Grid container spacing={3}>
        {books.length > 0 ? (
          books.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title || "No Title Available"}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderBottom: "1px solid #ddd",
                    }}
                  />
                ) : (
                  <Box
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <Typography variant="subtitle1">No Image Available</Typography>
                  </Box>
                )}
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {book.volumeInfo.title || "No Title Available"}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    <strong>Authors:</strong>{" "}
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "Unknown"}
                  </Typography>
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    {book.volumeInfo.description
                      ? book.volumeInfo.description.substring(0, 100) + "..."
                      : "No Description Available"}
                  </Typography>
                  <Link
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    Preview Book
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No books found. Try searching for something else!</Typography>
        )}
      </Grid>
      <Navbar/>
    </div>
  );
};

export default BookSearch;
