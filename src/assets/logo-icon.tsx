import React from "react";
import { ObissLogo } from "@/components/ObissLogo";

export default function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return <ObissLogo showText={false} variant="white" {...props} />;
}
