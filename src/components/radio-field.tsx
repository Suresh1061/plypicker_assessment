import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Control } from "react-hook-form";

interface RadioFieldProps {
    name: string;
    control: Control<any>;
}

const RadioField = ({ name, control }: RadioFieldProps) => {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <div className=" pl-2 py-2">
                        <FormControl>
                            <RadioGroup {...field} onValueChange={field.onChange} value={field.value} className=" space-y-2 ">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="team-member" id="team-member" />
                                    <Label htmlFor="team-member">Team Member</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="admin" id="admin" />
                                    <Label htmlFor="admin">Admin</Label>
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default RadioField;
