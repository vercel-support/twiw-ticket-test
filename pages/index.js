import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState("Waiting for data...");
  useEffect(async () => {
    getMapData();
  }, []);

  async function getMapData() {
    try {
      const res = await axios.get("/api/test");
      setData(`${JSON.stringify(res).substring(0, 10000)}... and so on`);
    } catch (error) {
      console.error(error);
    }
  }
  return data;
}
