import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Box, Divider, Paper } from "@mantine/core";
import { Suspense } from "react";
import type { FC } from "react";
import styles from "./Demo.module.css";

export interface DemoProps {
  data: { code: string; component: FC };
}

export const Demo = (props: DemoProps) => {
  const { data } = props;

  return (
    <Paper className={styles.container} withBorder mih={300} my={"lg"}>
      <Box p={"sm"}>
        <Suspense>
          <data.component />
        </Suspense>
      </Box>

      <Divider />

      <CodeHighlightTabs
        withExpandButton
        defaultExpanded={false}
        code={[{ code: data.code, fileName: "Example.tsx", language: "tsx" }]}
      />
    </Paper>
  );
};
