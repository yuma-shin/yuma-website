import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SkillSetSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-3">{children}</div>
    </Section>
  )
}

function Appearance({ title }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
    </Card>
  )
}

export const metadata = {
  title: 'Skill Set',
  description:
    'Skill Set',
}

export default function SkillSet() {
  return (
    <SimpleLayout
      title="Skill Set"
      intro=""
    >
      <div className="space-y-10">
        <SkillSetSection title="Cisco">
          <Appearance title="Cisco Unified Communications Manager (CallManager)" />
          <Appearance title="Cisco Unity Connection" />
          <Appearance title="Cisco Unified Communications Manager (IM&Presence)" />
          <Appearance title="Cisco Expressway" />
          <Appearance title="Cisco IOS (Catalyst, ISR, ASR)" />
          <Appearance title="Cisco NX-OS (Nexus)" />
        </SkillSetSection>
        <SkillSetSection title="Language">
          <Appearance title="HTML" />
          <Appearance title="CSS" />
          <Appearance title="JavaScript" />
          <Appearance title="PHP" />
          <Appearance title="Python" />
          <Appearance title="TypeScript" />
          <Appearance title="Ansible" />
        </SkillSetSection>
        <SkillSetSection title="Linux">
          <Appearance title="CentOS" />
          <Appearance title="Red Hat Enterprise Linux" />
          <Appearance title="Ubuntu" />
          <Appearance title="Rocky Linux" />
        </SkillSetSection>
        <SkillSetSection title="Generative AI">
          <Appearance title="OpenAI" />
          <Appearance title="Azure OpenAI" />
          <Appearance title="Llama" />
          <Appearance title="LangChain" />
        </SkillSetSection>
        <SkillSetSection title="Other">
          <Appearance title="Apache" />
          <Appearance title="Maria DB" />
          <Appearance title="PostgreSQL" />
          <Appearance title="Sqlite3" />
          <Appearance title="Smart Data Platform" />
          <Appearance title="VMware vSphere" />
          <Appearance title="Zabbix" />
          <Appearance title="Electron" />
        </SkillSetSection>
      </div>
    </SimpleLayout>
  )
}
