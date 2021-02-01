import styles from "./main.module.css";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Questions({ questions }) {
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(0);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Your score is: {score}</h1>
        <div className={styles.card}>
          {questions.map(item => {
            return (
              <a key={item.id}>
                <ul>{item.category}</ul>
                <ul>{item.question}</ul>
                <Button
                  variant="contained"
                  onClick={e => {
                    setScore(prev =>
                      e.target.value == item.correct_answer ? prev + 1 : prev
                    );
                    setPage(prev => (prev < 10 ? prev + 1 : 1));
                    setBtnDisabled(prev => prev + 1);
                  }}
                  value="True"
                >
                  True
                </Button>
                <Button
                  variant="contained"
                  onClick={e => {
                    setPage(prev => (prev < 10 ? prev + 1 : 1));
                    setScore(prev =>
                      e.target.value === item.correct_answer ? prev + 1 : prev
                    );
                    setBtnDisabled(prev => prev + 1);
                  }}
                  value="False"
                >
                  False
                </Button>
                <p>{page} /10</p>
              </a>
            );
          })}
        </div>
        <Link href="/results">
          <Button
            variant="contained"
            disabled={btnDisabled === 10 ? false : true}
          >
            submit
          </Button>
        </Link>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:8080/",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query {
        results {
          category
          question
          correct_answer
        }
      }
    `
  });

  return {
    props: {
      questions: data.results
    }
  };
}
