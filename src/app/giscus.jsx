import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Comment = () => {
  const { theme, systemTheme } = useTheme();
  const [giscusTheme, setGiscusTheme] = useState('light');

  useEffect(() => {
    // themeが'system'の場合は、システムのテーマに基づいてGiscusのテーマを決定
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    
    // Giscusのテーマを設定
    setGiscusTheme(resolvedTheme === 'dark' ? 'dark' : 'light');
  }, [theme, systemTheme]);

  return (
    <Giscus
      id="comments"
      repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
      category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={giscusTheme} // 動的にテーマを変更
    />
  );
};