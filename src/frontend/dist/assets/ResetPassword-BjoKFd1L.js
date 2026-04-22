import { c as createLucideIcon, aw as useNavigate, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, au as Link } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { b as useForm, c as a, o as object, s as string } from "./schemas-CliX3hN0.js";
import { L as Lock } from "./lock-DMcGfbLi.js";
import { E as EyeOff, a as Eye } from "./eye-BWmDkAln.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import "./index-BrhQEKyn.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
const resetSchema = object({
  password: string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Must contain an uppercase letter").regex(/[0-9!@#$%^&*]/, "Must contain a number or symbol"),
  confirmPassword: string()
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
function getPasswordStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;
  if (score <= 1) return { score: 1, label: "Weak", color: "bg-destructive" };
  if (score === 2) return { score: 2, label: "Fair", color: "bg-warning" };
  if (score === 3) return { score: 3, label: "Good", color: "bg-chart-1" };
  return { score: 4, label: "Strong", color: "bg-chart-2" };
}
const passwordRules = [
  { test: (p) => p.length >= 8, label: "At least 8 characters" },
  { test: (p) => /[A-Z]/.test(p), label: "One uppercase letter" },
  {
    test: (p) => /[0-9!@#$%^&*]/.test(p),
    label: "One number or symbol"
  }
];
function ResetPasswordPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: a(resetSchema) });
  const passwordValue = watch("password") ?? "";
  const strength = getPasswordStrength(passwordValue);
  const onSubmit = async (_data) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => navigate({ to: "/auth/login" }), 2500);
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
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
      className: "space-y-6 text-center",
      "data-ocid": "reset.success_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0, rotate: -90 },
            animate: { scale: 1, rotate: 0 },
            transition: {
              delay: 0.1,
              type: "spring",
              stiffness: 260,
              damping: 18
            },
            className: "flex justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-chart-1/10 border border-chart-1/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 32, className: "text-chart-1" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Password reset!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: "Your password has been updated. Redirecting you to sign in..." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: "100%" },
            transition: { delay: 0.4, duration: 2.2, ease: "linear" },
            className: "h-1 bg-chart-1 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/auth/login",
                className: "text-sm text-primary hover:underline font-medium",
                "data-ocid": "reset.goto_login.link",
                children: "Go to sign in now"
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
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Set new password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Create a strong password for your account." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit(onSubmit),
            className: "space-y-4",
            noValidate: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "New Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Lock,
                    {
                      size: 13,
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: showPassword ? "text" : "password",
                      placeholder: "Min 8 characters",
                      ...register("password"),
                      className: `pl-8 pr-10 h-10 transition-smooth ${errors.password ? "border-destructive" : ""}`,
                      "data-ocid": "reset.password.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                      "aria-label": "Toggle password visibility",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: passwordValue.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "space-y-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4].map((bar) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: `h-1 flex-1 rounded-full transition-all duration-300 ${strength.score >= bar ? strength.color : "bg-muted"}`,
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { delay: bar * 0.05 }
                        },
                        bar
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                        "Strength:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-medium ${strength.score <= 1 ? "text-destructive" : strength.score === 2 ? "text-warning" : "text-chart-1"}`,
                            children: strength.label
                          }
                        )
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "text-[11px] text-destructive",
                    "data-ocid": "reset.password.field_error",
                    children: errors.password.message
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "space-y-2", children: passwordRules.map((rule) => {
                const met = rule.test(passwordValue);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "flex items-center gap-2",
                    animate: { opacity: passwordValue ? 1 : 0.5 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheck,
                        {
                          size: 12,
                          className: `transition-colors duration-200 ${met && passwordValue ? "text-chart-1" : "text-muted-foreground/40"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[11px] transition-colors duration-200 ${met && passwordValue ? "text-foreground" : "text-muted-foreground"}`,
                          children: rule.label
                        }
                      )
                    ]
                  },
                  rule.label
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Confirm Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Lock,
                    {
                      size: 13,
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: showConfirm ? "text" : "password",
                      placeholder: "Repeat password",
                      ...register("confirmPassword"),
                      className: `pl-8 pr-10 h-10 transition-smooth ${errors.confirmPassword ? "border-destructive" : ""}`,
                      "data-ocid": "reset.confirm_password.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowConfirm(!showConfirm),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                      "aria-label": "Toggle confirm password visibility",
                      children: showConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "text-[11px] text-destructive",
                    "data-ocid": "reset.confirm_password.field_error",
                    children: errors.confirmPassword.message
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full h-10 font-medium",
                  disabled: isLoading,
                  "data-ocid": "reset.submit_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.span,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className: "flex items-center gap-2",
                      "data-ocid": "reset.loading_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                        "Resetting..."
                      ]
                    },
                    "loading"
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      children: "Reset Password"
                    },
                    "text"
                  ) })
                }
              ) })
            ]
          }
        )
      ]
    },
    "form"
  ) });
}
export {
  ResetPasswordPage as default
};
