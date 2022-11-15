import { useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ABI from "../abis/test.json";

const Home: NextPage = () => {
  const { contract: usdcContract } = useContract("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", ABI);
  console.log(usdcContract);
  
  return (
    <div className={styles.container}>
      hi Daniel
    </div>
  )
};

export default Home;
