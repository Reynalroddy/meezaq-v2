import { Control } from "react-hook-form";
import { IconType } from "react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
// import { CategoryLabel } from "@/utils/categories";
import { Textarea } from "../ui/textarea";

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
  type: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
};

type TextAreaProps = {
  name: string;
  control: Control<any>;
  label: string;
};

export function CustomFormField({
  name,
  control,
  type,
  label,
  defaultValue,
  required,
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-2">
          <FormLabel className="capitalize ">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={label}
              required={required}
              defaultValue={defaultValue}
              {...field}
              className="text-black"
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
}

type Category = {
  name: string;
  href: string;
};

type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: Category[];
  labelText?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            required
          >
            <FormControl>
              <SelectTrigger id={name}>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item: any) => {
                return (
                  <SelectItem key={item.name} value={item.name}>
                    <span className="flex items-center gap-2">{item.name}</span>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomTextArea({ name, control, label }: TextAreaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={label}
              {...field}
              rows={5}
              required
              className="leading-loose"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
