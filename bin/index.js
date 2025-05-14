#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

const getType = (str) => {
  if (str === "s") return "Screen";
  else if (str === "c") return "Component";
};

if (process.argv[3] && process.argv[3] !== "s" && process.argv[3] !== "c") {
  console.log(process.argv[3]);
  console.log("❌ Either it can be c for Component and s for Screen ");
  process.exit(1);
}

if (!componentName) {
  console.log("❌ Please provide a component name.");
  process.exit(1);
}

const componentDir = path.join(
  process.cwd(),
  `${componentName}${getType(process.argv[3])}`
);
fs.mkdirSync(componentDir);

fs.writeFileSync(
  path.join(
    componentDir,
    `${componentName}.${getType(process.argv[3]).toLowerCase()}.tsx`
  ),
  `import React from "react";
    import { View, Text } from "react-native";

    const ${componentName}${getType(process.argv[3])} = () => {
        return (
            <View>
                <Text>${componentName}</Text>
            </View>
        );
    };

    export default ${componentName}${getType(process.argv[3])};
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
