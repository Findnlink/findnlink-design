module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import styles from "./${componentName}.module.scss";

export const ${componentName} = ({ foo }: ${componentName}Props) => {
  return (
    <div data-testid={'${componentName}'} className={styles.foo}>
      {foo}
    </div>
  )
}
`,
  extension: `.tsx`,
})
