import { useTranslations } from "next-intl";
import Button from "@/components/common/Button";
import { usePasswordStore } from "@/stores/passwordGenerator";

const PasswordGeneratorButton = () => {
  const t = useTranslations();
  const { generatePassword } = usePasswordStore(state => state.actions);

  return (
    <Button onClick={generatePassword} size={"lg"}>
      {t("password-generator.button.generate")}
    </Button>
  );
};
export default PasswordGeneratorButton;
