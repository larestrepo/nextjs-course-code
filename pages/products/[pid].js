import { Fragment } from "react";
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props) {

    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loadding....</p>
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true};
    }

    return {

        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {

    const data = await getData();
    const ids = data.products.map(product => product.id);
    const pathWithParams = ids.map(id => ({params: {pid: id}}));

    return {
        paths: pathWithParams
            // { params: { pid: 'p1'}},
            // { params: { pid: 'p2'}},
            // { params: { pid: 'p3'}},
            

        ,
        fallback: true, //can help if we have to generate many pages. when true we don't need to pre-generate all the pages.
        // Idea is to generate highly visited pages and postpone less visited pages. But we need to give some time to generate with a loading function.
        //Other option is:
        // fallback: 'blocking',
        // with blocking the loading section is not needed
    };
}

export default ProductDetailPage;