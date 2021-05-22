import React, { useState } from "react";
import { EmptyState, Layout, Page, Card } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png";

function Index() {
    const [modal, setModal] = useState({ open: false });

    return (
        <Page>
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={modal.open}
                onCancel={() => setModal({ open: false })}
            />

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
        </Page>
    );
}

export default Index;
