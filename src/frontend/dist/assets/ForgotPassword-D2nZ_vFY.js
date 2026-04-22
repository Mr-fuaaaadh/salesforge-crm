import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, au as Link, M as Mail } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { b as useForm, c as a, o as object, s as string } from "./schemas-CliX3hN0.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import { A as ArrowLeft } from "./arrow-left-Dz494sRC.js";
import "./index-BrhQEKyn.js";
const forgotSchema = object({
  email: string().email("Please enter a valid email address")
});
function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const [sentEmail, setSentEmail] = reactExports.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: a(forgotSchema) });
  const onSubmit = async (data) => {
    setIsLoading(true);
    setSentEmail(data.email);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsLoading(false);
    setIsSuccess(true);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
      className: "space-y-6 text-center",
      "data-ocid": "forgot.success_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0, rotate: -180 },
            animate: { scale: 1, rotate: 0 },
            transition: {
              delay: 0.15,
              type: "spring",
              stiffness: 260,
              damping: 20
            },
            className: "flex justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-chart-1/10 border border-chart-1/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 32, className: "text-chart-1" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Check your email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: [
                "We've sent a password reset link to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: sentEmail })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            className: "rounded-2xl bg-muted/50 border border-border/50 p-4 text-left",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
              "Didn't receive the email? Check your spam folder, or",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsSuccess(false),
                  className: "text-primary hover:underline font-medium",
                  "data-ocid": "forgot.resend.button",
                  children: "try a different email address"
                }
              ),
              "."
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/auth/login",
                className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                "data-ocid": "forgot.back_to_login.link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
                  "Back to sign in"
                ]
              }
            )
          }
        )
      ]
    },
    "success"
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Reset password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter your email and we'll send you a reset link." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit(onSubmit),
            className: "space-y-4",
            noValidate: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs font-medium", children: "Email address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Mail,
                    {
                      size: 14,
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "email",
                      type: "email",
                      placeholder: "alex@company.com",
                      ...register("email"),
                      className: `pl-9 h-10 transition-smooth ${errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""}`,
                      "data-ocid": "forgot.email.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "text-[11px] text-destructive",
                    "data-ocid": "forgot.email.field_error",
                    children: errors.email.message
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full h-10 font-medium",
                  disabled: isLoading,
                  "data-ocid": "forgot.submit_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.span,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className: "flex items-center gap-2",
                      "data-ocid": "forgot.loading_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                        "Sending link..."
                      ]
                    },
                    "loading"
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      children: "Send Reset Link"
                    },
                    "text"
                  ) })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/auth/login",
            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center",
            "data-ocid": "forgot.back_to_login.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
              "Back to sign in"
            ]
          }
        ) })
      ]
    },
    "form"
  ) });
}
export {
  ForgotPasswordPage as default
};
