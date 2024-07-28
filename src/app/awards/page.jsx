import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function AwardsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Awards',
  description:
    'Awards',
}

export default function Awards() {
  return (
    <SimpleLayout
      title="Awards"
      intro=""
    >
      <div className="space-y-10">
        <AwardsSection title="2023">
          <Appearance
            title="社長表彰 佳作"
            description="社内社長表彰にてServo+IoTでバーチャル検証空間を拡大 -リアルから繋ぐ鍵Remote Key Puncher-を出展し佳作を受賞。"
            event="6月"
          />
        </AwardsSection>
        <AwardsSection title="2022">
          <Appearance
            title="DX Summit 2022 Award"
            description="グループDX Summit 2021にてServo+IoTでバーチャル検証空間を拡大 -リアルから繋ぐ鍵Remote Key Puncher-を出展しAwardを受賞。"
            event="12月"
          />
        </AwardsSection>
        <AwardsSection title="2021">
          <Appearance
            title="社長表彰 佳作"
            description="社内社長表彰にてSkyWay+IoTでバーチャル検証空間を実現 -リアルな検証を自宅でも可能に-を出展し佳作を受賞。"
            event="6月"
          />
          <Appearance
            title="DX Summit 2021 Award"
            description="グループDX Summit 2021にてSkyWay+IoTでバーチャル検証空間を実現 -リアルな検証を自宅でも可能に-を出展しAwardを受賞。"
            event="12月"
          />
        </AwardsSection>
        <AwardsSection title="2019">
          <Appearance
            title="平成30年度 学生表彰 校長賞"
            description="平成30年度 学生表彰 校長賞を受賞。過去5年間のコンテスト成績を評価。"
            event="2月"
          />
          <Appearance
            title="平成30年度 学生表彰 功労賞(個人)"
            description="平成30年度 学生表彰 功労賞(個人)を受賞。過去5年間のコンテスト成績を評価。"
            event="2月"
          />
          <Appearance
            title="平成30年度 学生表彰 功労賞(団体:気象観測機器コンテスト)"
            description="平成30年度 学生表彰 功労賞(団体:気象観測機器コンテスト)を受賞。第7回高校・高専「気象観測機器コンテスト」での最優秀賞を評価。"
            event="2月"
          />
          <Appearance
            title="平成30年度 学生表彰 功労賞(団体:プログラミングコンテスト)"
            description="平成30年度 学生表彰 功労賞(団体:プログラミングコンテスト)を受賞。第29回全国高等専門学校プログラミングコンテスト 自由部門での優秀賞を評価。"
            event="2月"
          />
        </AwardsSection>
        <AwardsSection title="2018">
          <Appearance
            title="平成29年度 学生表彰 功労賞(団体)"
            description="平成29年度 学生表彰 功労賞(団体)を受賞。第6回高校・高専「気象観測機器コンテスト」での優秀賞を評価。"
            event="2月"
          />
          <Appearance
            title="第29回全国高等専門学校プログラミングコンテスト 自由部門 優秀賞"
            description="第29回全国高等専門学校プログラミングコンテスト 自由部門にぷらねっと -ARを用いた植物栽培教育支援システム-を出展し優秀賞を受賞。"
            event="10月"
          />
          <Appearance
            title="NAPROCK 10th International Programming Contest In The Original Section SECOND PRISE"
            description="NAPROCK 10th International Programming Contest In The Original Sectionにぷらねっと -ARを用いた植物栽培教育支援システム-を出展しSECOND PRISEを受賞。"
            event="10月"
          />
          <Appearance
            title="第7回高校・高専「気象観測機器コンテスト」最優秀賞"
            description="第7回高校・高専「気象観測機器コンテスト」に多地点同時・多種気象データ観測機器「P=System」を出展し最優秀賞を受賞。"
            event="11月"
          />
        </AwardsSection>
        <AwardsSection title="2017">
          <Appearance
            title="平成28年度 学生表彰 功労賞(団体)"
            description="平成28年度 学生表彰 功労賞(団体)を受賞。第5回高校・高専「気象観測機器コンテスト」での優秀賞を評価。"
            event="2月"
          />
          <Appearance
            title="第6回高校・高専「気象観測機器コンテスト」優秀賞"
            description="第6回高校・高専「気象観測機器コンテスト」にて2017 Examine Project | 大気汚染物質観測衛星「PENTA」を出展し優秀賞を受賞。"
            event="11月"
          />
        </AwardsSection>
        <AwardsSection title="2016">
          <Appearance
            title="第5回高校・高専「気象観測機器コンテスト」優秀賞"
            description="第5回高校・高専「気象観測機器コンテスト」にて2016 Examine Project | Stratosphere Examine Satellite(成層圏観測衛星)「SES」を出展し優秀賞を受賞。"
            event="11月"
          />
        </AwardsSection>
        <AwardsSection title="2015">
          <Appearance
            title="平成26年度 学生表彰 功労賞(団体)"
            description="平成26年度 学生表彰にて功労賞(団体)を受賞。第3回高校・高専「気象観測機器コンテスト」での優秀賞を評価。"
            event="2月"
          />
        </AwardsSection>
        <AwardsSection title="2014">
          <Appearance
            title="第3回高校・高専「気象観測機器コンテスト」優秀賞"
            description="第3回高校・高専「気象観測機器コンテスト」にて2014 Examine Project | Cloud Examineを出展し優秀賞を受賞。"
            event="12月"
          />
        </AwardsSection>
      </div>
    </SimpleLayout>
  )
}
