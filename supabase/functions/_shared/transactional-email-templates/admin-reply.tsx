import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface AdminReplyProps {
  subject?: string
  body?: string
}

export const AdminReply = ({ subject = 'A message from PRC', body = '' }: AdminReplyProps) => (
  <Html>
    <Head />
    <Preview>{subject}</Preview>
    <Body style={{ backgroundColor: '#f4f4f4', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px 0' }}>
      <Container style={{ backgroundColor: '#ffffff', maxWidth: '560px', margin: '0 auto', padding: '32px', borderTop: '6px solid #c1121f' }}>
        <Text style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#c1121f', margin: '0 0 16px' }}>
          Permanent Revolutionary Congress
        </Text>
        <Section>
          {String(body).split('\n').map((line, i) => (
            <Text key={i} style={{ fontSize: '15px', lineHeight: '1.6', color: '#111111', margin: line.trim() ? '0 0 12px' : '0 0 6px' }}>
              {line}
            </Text>
          ))}
        </Section>
        <Hr style={{ borderColor: '#dddddd', margin: '24px 0' }} />
        <Text style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
          Permanent Revolutionary Congress · info@prca.world · prca.world
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminReply,
  subject: (data: Record<string, any>) => data?.subject ?? 'A message from PRC',
  displayName: 'Admin Reply',
  previewData: {
    subject: 'Re: Your message to the Permanent Revolutionary Congress',
    body: 'Dear Comrade,\n\nThank you for reaching out.\n\nIn solidarity,\nPRC',
  },
} satisfies TemplateEntry
