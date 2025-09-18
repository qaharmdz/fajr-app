import { Page, Layout, Card, Text, BlockStack, InlineStack } from "@shopify/polaris";

export default function Dashboard() {
  return (
    <Page title="Dashboard - Fajr App">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Welcome to Fajr App Dashboard
              </Text>
              <Text as="p" variant="bodyMd">
                This is your central hub for managing all aspects of your store. Use the navigation menu to access different features.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <BlockStack gap="400">
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">
                  Quick Stats
                </Text>
                <InlineStack gap="500" wrap={false} align="space-around">
                  <BlockStack gap="200" align="center">
                    <Text as="span" variant="headingLg">
                      12
                    </Text>
                    <Text as="span" variant="bodySm">
                      Active Discounts
                    </Text>
                  </BlockStack>
                  <BlockStack gap="200" align="center">
                    <Text as="span" variant="headingLg">
                      3
                    </Text>
                    <Text as="span" variant="bodySm">
                      Modal Templates
                    </Text>
                  </BlockStack>
                  <BlockStack gap="200" align="center">
                    <Text as="span" variant="headingLg">
                      89%
                    </Text>
                    <Text as="span" variant="bodySm">
                      Conversion Rate
                    </Text>
                  </BlockStack>
                </InlineStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingMd">
                  Recent Activity
                </Text>
                <BlockStack gap="200">
                  <Text as="p" variant="bodyMd">
                    • New discount "Summer Sale" created 2 days ago
                  </Text>
                  <Text as="p" variant="bodyMd">
                    • Modal template "Newsletter Signup" updated yesterday
                  </Text>
                  <Text as="p" variant="bodyMd">
                    • 24 new customers used your discounts this week
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
