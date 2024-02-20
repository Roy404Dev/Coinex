"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Coin = {
  value: string;
  label: string;
};

type CoinsProps = {
  listOfCoins: Coin[];
  default: string;
};

export function ComboboxDemo({
  listOfCoins,
  default: defaultOption,
}: CoinsProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          style={{
            backgroundColor: "#2A2B31",
            color: "white",
            border: "none",
          }}
          aria-labelledby="select coin"
        >
          {value
            ? listOfCoins.find((coin) => coin.value === value)?.label
            : defaultOption.toUpperCase()}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 dark">
        <Command>
          <CommandInput placeholder="Search coin..." className="h-9" />
          <CommandEmpty>No coin found.</CommandEmpty>
          <CommandGroup>
            {listOfCoins.map((coin) => (
              <CommandItem
                key={coin.value}
                value={coin.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {coin.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === coin.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
