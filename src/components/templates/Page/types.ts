import { ComponentProps, PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren<ComponentProps<"main">> {
  pageClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}
