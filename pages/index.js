import React, { useState } from "react";
import { EmptyState, Layout, Page, Card } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import store from "store-js";
import ProductList from "../components/ProductList";

const img = "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png";

function Index() {
    const [modal, setModal] = useState({ open: false });
    const emptyState = !store.get("ids");

    function handleSelection(resources) {
        const idsFromResources = resources.selection.map((product) => product.id);
        setModal({ open: false });
        store.set("ids", idsFromResources);
        console.log(store.get("ids"));
    }

    return (
        <Page>
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={modal.open}
                onCancel={() => setModal({ open: false })}
                onSelection={(resources) => handleSelection(resources)}
            />

            {emptyState ? (
                <Layout>
                    <Card sectioned>
                        <EmptyState
                            heading="Manage your inventory transfers"
                            action={{
                                content: "Select Products",
                                onAction: () => setModal({ open: true }),
                            }}
                            image={img}>
                            <p>Select Products</p>
                        </EmptyState>
                    </Card>
                </Layout>
            ) : (
                <ProductList />
            )}
        </Page>
    );
}

export default Index;
