/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_SIGNUP_URL?: string;
  readonly VITE_CHECKOUT_PRO_MONTHLY_URL?: string;
  readonly VITE_CHECKOUT_PRO_ANNUAL_URL?: string;
  readonly VITE_CHECKOUT_BUSINESS_MONTHLY_URL?: string;
  readonly VITE_CHECKOUT_BUSINESS_ANNUAL_URL?: string;
  readonly VITE_CHECKOUT_ENTERPRISE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}