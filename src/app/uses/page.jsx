import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: '使用しているソフトウェア・ガジェット',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Uses"
      intro="僕が使用しているソフトウェア・ガジェットをご紹介します。"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Custom PC (Core i7 11700k, RTX 3080, 32GB RAM)">
            第11世代Core i7とRTX 3080をベースとした自作PCをプライベートの開発用で使用しています。<br />
            開発用とは名ばかりでゲームばかりしていますが...w
          </Tool>
          <Tool title="13&apos; MacBook Air, M2, 8GB RAM (2022)">
            サブPCとしてM2 Mac Book Airを使用しています。軽い開発やネットサーフィンに使用しています。<br />
            初めてのMacで最近購入しました。WindowsとMacは両方使いこなせるようになりたいですね。
          </Tool>
          <Tool title="BenQ MOBIUZ EX2510S">
            会社支給のノートPCや自作PCの映像出力先として24インチのゲーミングモニターを2台使用しています。<br />
            元々同じBenQさんのXL2411Pを使用していましたがEX2510Sの方が発色がとても良く気に入っています。
          </Tool>
          <Tool title="Keychron Q1 Max (JIS)">
            今のところメインキーボードとして使用しています。Makuakeさんのクラウドファンディングで購入しました。<br />
            軸はバナナ軸を選択しましたが「コトコト」ととても良い打鍵感で気に入っています。<br />
            ちなみにQシリーズではQ1, Q1 Proも持っていますw
          </Tool>
          <Tool title="Logicool MX Master 3">
            今のところメインのマウスとして使用しています。横スクロール用のホイールが付いているのが便利ですね。<br />
            ちなみにMXシリーズではMX Keys(キーボード), MX Master 2s, MX Master 3sを持っています。<br />
            MX Master 3sはクリック音が静音で時々使い分けています。
          </Tool>
          <Tool title="Logicool ERGO M575">
            会社支給のPC(事務用)で使用しています。トラックボールマウスに興味がありお試しで購入しました。<br />
            はじめは違和感がありますが、慣れると手首が疲れにくくとても使いやすいです。
          </Tool>
          <Tool title="Logicool G703">
            ゲームで使用しています。手にフィットしやすくマウスの重量もオモリで変えられるのが特徴です。
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            アプリケーション開発用のエディタとして使用しています。拡張機能で自分好みにカスタマイズでき重宝しています。<br />
            Github Copilot使ってみたい...
          </Tool>
          <Tool title="Terminal">
            コマンド実行はWindowsに標準搭載されているターミナルをOh My Poshでカスタマイズして使用しています。
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
