import styles from "./main.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Result({ questions }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h6 className={styles.title}>Check out your score</h6>
        <div className={styles.description}>
          {questions.map(question => {
            return (
              <a key={question.id}>
                <ul>{question.question}</ul>
                <ul>{question.correct_answer}</ul>
              </a>
            );
          })}
        </div>
        <Link href="/">
          <Button variant="contained">play again</Button>
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
