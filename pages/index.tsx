"use client";
import { useEffect } from "react";
import Layout from "../components/layout";
import { MiniKit } from "@worldcoin/minikit-js";

export default function IndexPage() {
  useEffect(() => {
    console.log(MiniKit.isInstalled());
  }, []);
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> with{" "}
        <a href="https://worldcoin.org/world-id">World ID</a> for
        authentication.
      </p>
    </Layout>
  );
}
