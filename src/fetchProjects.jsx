import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "zyrn3p4h55yr",
  environment: "master",
  accessToken: "CeO08H92iX3M0r_Lg66NPpKCGBMNY4szBI7aKBQxGSI",
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: "projects",
      });
      const projects = resp.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, projects };
};
