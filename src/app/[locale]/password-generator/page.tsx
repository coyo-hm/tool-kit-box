import { useTranslations } from "next-intl";
import usePasswordGenerator from "@/hooks/usePasswordGenerator";
import { formStyle } from "@/app/[locale]/password-generator/page.css";
import PasswordOutput from "@/app/[locale]/password-generator/_components/PasswordOutput";
import PasswordOptions from "@/app/[locale]/password-generator/_components/PasswordOptions";
import Button from "@/components/common/Button";

export default function PasswordGeneratorPage() {
  const t = useTranslations();
  const { password, generatePassword, passwordOptions, setPasswordOptions } = usePasswordGenerator();

  const _generatePassword = () => generatePassword(passwordOptions);

  return (
    <form className={formStyle} onSubmit={e => e.preventDefault()}>
      <PasswordOptions passwordOptions={passwordOptions} setPasswordOptions={setPasswordOptions} />
      <Button type="button" onClick={_generatePassword} size={"lg"}>
        {t("password-generator.button.generate")}
      </Button>
      <PasswordOutput password={password} />
    </form>
  );
}
