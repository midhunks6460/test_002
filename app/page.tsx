import Button from "./components/Button";
import { FaCube } from "react-icons/fa";
import TextInput from "./components/TextInput";
import SelectInput from "./components/Select";
import Checkbox1 from "./components/CheckBox/Checkbox1/Checkbox1";
import Checkbox2 from "./components/CheckBox/Checkbox2/Checkbox2";
import Checkbox3 from "./components/CheckBox/Checkbox3/Checkbox3";
import Radio1 from "./components/Radio/Radio1/Radio1";
import Radio2 from "./components/Radio/Radio2/Radio2";
import Radio3 from "./components/Radio/Radio3/Radio3";
import Toggle1 from "./components/Toggles/Toggle1/Toggle1";
import Toggle2 from "./components/Toggles/Toggle2/Toggle2";
import Tooltip1 from "./components/Tooltips/Tooltip1/Tooltip1";
import Tooltip2 from "./components/Tooltips/Tooltip2/Tooltip2";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
      <div className="w-full max-w-6xl px-4">
        <div className="text-center mb-8">
          <div className="mb-6">
            <TextInput variation="twoIcons" />
          </div>
          <Button
            mode="light"
            style="primary"
            size="small"
            iconPosition="leading"
            icon={<FaCube />}
            label="Button"
          />
          <div className="mt-4">
            <SelectInput value={false} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <Checkbox1 value={true} />
            </div>
            <div className="mb-4">
              <Checkbox2 value={true} />
            </div>
            <div className="mb-4">
              <Checkbox3 value={true} />
            </div>
            <div className="relative mb-4 mt-24 ml-28">
              <Tooltip1 position="top" />
            </div>

            {/* <div className="relative mb-4 ml-18">
              <Tooltip2 position="top" />
            </div> */}
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <Radio1 value={false} />
            </div>
            <div className="mb-4">
              <Radio2 value={false} />
            </div>
            <div className="mb-4">
              <Radio3 value={false} />
            </div>
            <div className="mb-4">
              <Toggle1 value={false} />
            </div>
            <div className="mb-4">
              <Toggle2 value={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
