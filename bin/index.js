#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.log("❌ Please provide a component name.");
  process.exit(1);
}

const componentDir = path.join(process.cwd(), componentName);
fs.mkdirSync(componentDir);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.component.tsx`),
  `import React from "react";
    import { View, Text } from "react-native";

    const ${componentName}Component = () => {
        return (
            <View>
                <Text>${componentName}</Text>
            </View>
        );
    };

    export default ${componentName}Component;
   `
);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.styles.tsx`),
  `import { StyleSheet } from 'react-native';

    export const styles = StyleSheet.create({
  container: {
  },
});
   `
);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.types.ts`),
  `export interface ${componentName}Props {
        title: string;
    }
   `
);

console.log(`✅ Component ${componentName} created successfully!`);
