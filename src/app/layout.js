import { AppProvider } from '@/context/AppContext';
import { AuthProvider } from '@/context/AuthContext';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Head from 'next/head';
import './index.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>
            <AuthProvider>
              <AppProvider>{children}</AppProvider>
            </AuthProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
