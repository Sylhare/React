import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Switch,
  Text,
  Theme,
} from '@radix-ui/themes';
import { CopyIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as React from 'react';

export default function RadixPage() {
  return (
    <div>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <Container style={{ backgroundColor: 'var(--gray-1)', marginTop: '20px'  }}>
          <Flex direction="column" align="center" gap="9">
          <Flex direction="column" gap="2" align="center">
            <Text>Hello from Radix Themes</Text>
            <Button size="2">Click</Button>
          </Flex>
          <Flex align="center" gap="4" wrap="wrap">
            <Flex align="center" gap="3" wrap="wrap">
              <Button radius="full">Button</Button>
              <Button asChild>
                <a href="#">Link</a>
              </Button>
              <Button disabled>Disabled</Button>
            </Flex>
            <Button variant="ghost">Ghost button</Button>
            <Checkbox defaultChecked />
            <Switch defaultChecked />
            <Switch defaultChecked disabled />
          </Flex>
          <Card size="4" style={{ width: '600px' }}>
            <Box position="absolute" top="0" right="0" m="3">
              <IconButton
                tabIndex={0}
                variant="ghost"
                color="gray"
                highContrast
              >
                <Cross2Icon width="20" height="20" />
              </IconButton>
            </Box>

            <Heading as="h3" size="6" trim="start" mb="2">
              Your company card
            </Heading>

            <Text as="p" size="2" mb="6" color="gray">
              View and manage your corporate card.
            </Text>

            <Box
              p="6"
              style={{
                backgroundColor: "var(--gray-a3)",
                borderRadius: "var(--radius-4)",
              }}
            >
              <Theme appearance="dark" asChild>
                <Flex
                  direction="column"
                  justify="between"
                  height="168px"
                  style={
                    {
                      background:
                        "linear-gradient(to top right, var(--accent-9), #E18BFF)",
                      boxShadow: "0 1px 20px -5px #7971E9AA",
                      borderRadius: "var(--radius-3)",
                      "--gray-12": "white",
                    } as React.CSSProperties
                  }
                >
                  <Text weight="medium" mt="3" mx="3" size="2">
                    Sophie Johnson
                  </Text>
                  <Box>
                    <Flex align="center" gap="3" mb="1" mx="3">
                      <Text size="2">
                        4929 3849
                        {/* An empty span prevents iOS Safari from thinking it's a telephone number */}
                        <span> </span>
                        5027 1846
                      </Text>
                      <IconButton
                        tabIndex={1}
                        variant="ghost"
                        color="gray"
                        size="1"
                        highContrast
                      >
                        <CopyIcon />
                      </IconButton>
                    </Flex>
                    <Flex gap="3" mb="2" mx="3">
                      <Text size="2">01 / 27</Text>
                      <Text size="2">999</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Theme>
            </Box>
            <Flex mt="6" justify="end" gap="3">
              <Button tabIndex={0} variant="outline" color="red">
                Freeze
              </Button>
              <Button tabIndex={1}>Done</Button>
            </Flex>
          </Card>
          </Flex>
        </Container>
      </Theme>
    </div>
  );
}