import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { components } from "../slices";

/**
 * posts component
 */
const Page = ({ doc, menu }) => {
  if (doc?.data) {
    return (
      <Layout altLangs={doc.alternate_languages} menu={menu}>
        <SliceZone slices={doc.data.body} components={components} />
      </Layout>
    );
  }
};

export async function getStaticProps({ params, locale }) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid, { lang: locale });
  const menu = await client.getSingle("top_menu", { lang: locale });

  return {
    props: {
      menu,
      doc: page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const documents = await client.getAllByType("page");

  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}

export default Page;
