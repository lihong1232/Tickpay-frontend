import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  return (
    <s-page heading="Tax display">
      <s-section heading="Add a tax note to your storefront">
        <s-paragraph>
          In Shopify admin, open Online Store, choose Themes, and select
          Customize. Add the Tax note block from the Apps section in a
          compatible theme section, enter your own text, and save the theme.
        </s-paragraph>
        <s-paragraph>
          The block displays the text you provide. It does not calculate tax
          rates or determine whether prices include tax.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
