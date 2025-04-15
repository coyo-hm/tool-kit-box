"use client";

import { formStyle } from "@/app/[locale]/password-generator/page.css";
import PasswordOptions from "@/components/passwordGenerator/PasswordOptions";
import PasswordGeneratorButton from "@/components/passwordGenerator/PasswordGeneratorButton";
import PasswordOutput from "@/components/passwordGenerator/PasswordOutput";

export default function PasswordGeneratorPage() {
  return (
    <form className={formStyle} onSubmit={e => e.preventDefault()}>
      <PasswordOptions />
      <PasswordGeneratorButton />
      <PasswordOutput />
    </form>
  );
}
