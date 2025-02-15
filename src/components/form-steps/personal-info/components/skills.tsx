import { ErrorMessage } from "@/components/common/errorMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { memo, useState } from "react";
import { useFieldArray } from "react-hook-form";

export const Skills = ({ error }: { error: string }) => {
  const { fields, append, remove } = useFieldArray({
    name: "skills",
  });

  const [inputSkill, setInputSkill] = useState<string>("");

  const handleAddSkills = () => {
    if (inputSkill.trim()) {
      append({
        skill: inputSkill.trim(),
      });
      setInputSkill("");
    }
    console.log(fields);
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <Label htmlFor="skills">Skills</Label>
      <div className="flex gap-2">
        <Input
          id="skills"
          placeholder="enter your skills"
          value={inputSkill}
          onChange={(e) => setInputSkill(e.target.value)}
          error={error}
        />
        <Button
          type="button"
          variant="outline"
          className="h-[40px] text-lg"
          onClick={handleAddSkills}
        >
          +
        </Button>
      </div>
      {fields.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {fields.map((field: Record<string, string>, index) => (
            <SkillTag
              key={field.id}
              skill={field.skill}
              onRemove={() => remove(index)}
            />
          ))}
        </div>
      )}

      {error && <ErrorMessage error={error} />}
    </div>
  );
};

interface SkillTagProps {
  skill: string;
  onRemove: () => void;
}

const SkillTag = memo(({ skill, onRemove }: SkillTagProps) => (
  <div className="bg-primary/75 text-white rounded flex items-center justify-between gap-1 px-1 ">
    <span>{skill}</span>
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={onRemove}
      className="text-red-500 hover:bg-transparent hover:scale-110 max-w-fit h-fit text-xs duration-300"
      aria-label="Remove Skill"
    >
      ❌
    </Button>
  </div>
));
