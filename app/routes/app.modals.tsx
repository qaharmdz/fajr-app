import { Page, Layout, Card, Text, BlockStack, InlineStack, Button, Box } from "@shopify/polaris";

export default function Modals() {
  return (
    <Page title="Modals - Fajr App">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Modal Templates
              </Text>
              <Text as="p" variant="bodyMd">
                Create and manage modal templates for your store. Use these templates to display promotional content, 
                newsletter signups, and other interactive elements to your customers.
              </Text>
              <Box paddingBlockStart="400">
                <InlineStack gap="300">
                  <Button variant="primary">Create new modal</Button>
                </InlineStack>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <BlockStack gap="400">
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">
                  Newsletter Signup
                </Text>
                <Text as="p" variant="bodyMd">
                  A simple newsletter signup form with email field and submit button.
                </Text>
                <InlineStack align="end">
                  <Button>Edit</Button>
                  <Button>Preview</Button>
                </InlineStack>
              </BlockStack>
            </Card>
            
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">
                  Special Offer
                </Text>
                <Text as="p" variant="bodyMd">
                  Promotional modal with discount code and product images.
                </Text>
                <InlineStack align="end">
                  <Button>Edit</Button>
                  <Button>Preview</Button>
                </InlineStack>
              </BlockStack>
            </Card>
            
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">
                  Exit Intent
                </Text>
                <Text as="p" variant="bodyMd">
                  Modal that appears when a user is about to leave your site.
                </Text>
                <InlineStack align="end">
                  <Button>Edit</Button>
                  <Button>Preview</Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
