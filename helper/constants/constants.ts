export const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string;

/// regex
export const PASSWORD_LENGTH_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

export const IS_SERVER = typeof window === "undefined";

export const DefaultImage =
    "https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png";
