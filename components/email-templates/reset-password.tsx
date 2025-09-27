import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';

export function ResetPassword({ url }: { url: string }) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password with this link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Reset Your Password</Heading>
          <Link
            href={url}
            target="_blank"
            style={{
              ...link,
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Click here to reset your password
          </Link>

          <Text
            style={{
              ...text,
              color: '#ababab',
              marginTop: '14px',
              marginBottom: '16px',
            }}
          >
            If you did not try to reset your password, you can safely ignore
            this email.
          </Text>

          <Img
            src="https://res.cloudinary.com/duxwaso8p/image/upload/v1758634698/amsa-logo_auiuxw.png"
            width="100"
            height="35"
            alt="AMSA's Logo"
          />
          <Text style={footer}>
            4408 Spicewood Springs Rd. <br /> Austin, TX 78759 <br /> Phone:
            512-991-2499 <br /> Fax: 512-343-9194 <br /> League Administrator:
            Robert S.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};
