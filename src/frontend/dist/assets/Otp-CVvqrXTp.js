import { c as createLucideIcon, aw as useNavigate, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, au as Link } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { I as InputOTP, a as InputOTPGroup, b as InputOTPSlot } from "./input-otp-gVqIoeBd.js";
import { R as RefreshCw } from "./refresh-cw-BxVbcfuL.js";
import { A as ArrowLeft } from "./arrow-left-Dz494sRC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
];
const MailCheck = createLucideIcon("mail-check", __iconNode);
const RESEND_COOLDOWN = 60;
function OtpPage() {
  const navigate = useNavigate();
  const [value, setValue] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [countdown, setCountdown] = reactExports.useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return c - 1;
      });
    }, 1e3);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const handleResend = () => {
    setCanResend(false);
    setCountdown(RESEND_COOLDOWN);
    setValue("");
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return c - 1;
      });
    }, 1e3);
  };
  const handleVerify = async () => {
    if (value.length < 6) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsLoading(false);
    navigate({ to: "/dashboard" });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MailCheck, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Verify your email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            "We sent a 6-digit code to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "alex@salesforge.io" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: "flex flex-col items-center space-y-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              InputOTP,
              {
                maxLength: 6,
                value,
                onChange: setValue,
                "data-ocid": "otp.code.input",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPGroup, { className: "gap-2", children: [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.8, y: 8 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    transition: {
                      delay: 0.1 + i * 0.05,
                      type: "spring",
                      stiffness: 300
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      InputOTPSlot,
                      {
                        index: i,
                        className: "w-10 h-12 text-lg font-display font-bold border-2 rounded-xl transition-smooth data-[active]:border-primary data-[active]:ring-2 data-[active]:ring-primary/20"
                      }
                    )
                  },
                  i
                )) })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "flex items-center justify-center gap-1.5 text-[12px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Didn't receive the code?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: canResend ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: handleResend,
                  className: "text-primary hover:underline font-medium inline-flex items-center gap-1",
                  "data-ocid": "otp.resend.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 11 }),
                    "Resend code"
                  ]
                },
                "resend"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.span,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "text-muted-foreground",
                  "data-ocid": "otp.countdown",
                  children: [
                    "Resend in",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground tabular-nums", children: [
                      countdown,
                      "s"
                    ] })
                  ]
                },
                "countdown"
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full h-10 font-medium",
            disabled: value.length < 6 || isLoading,
            onClick: handleVerify,
            "data-ocid": "otp.verify.submit_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "flex items-center gap-2",
                "data-ocid": "otp.loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                  "Verifying..."
                ]
              },
              "loading"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                children: "Verify & Continue"
              },
              "text"
            ) })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: "rounded-xl bg-muted/40 border border-border/50 px-4 py-3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground text-center leading-relaxed", children: [
              "The code expires in",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "10 minutes" }),
              ". Make sure to check your spam folder."
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/auth/login",
            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center",
            "data-ocid": "otp.back_to_login.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
              "Back to sign in"
            ]
          }
        ) })
      ]
    }
  );
}
export {
  OtpPage as default
};
