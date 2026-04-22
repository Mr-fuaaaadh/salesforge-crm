import { aw as useNavigate, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, au as Link, M as Mail } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { I as InputOTP, a as InputOTPGroup, b as InputOTPSlot } from "./input-otp-gVqIoeBd.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { a as Shield, S as Smartphone } from "./smartphone-6VKnvaMP.js";
import { A as ArrowLeft } from "./arrow-left-Dz494sRC.js";
import { M as MessageSquare } from "./message-square-DcuiSNSD.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
import "./index-BrhQEKyn.js";
const tabs = [
  {
    id: "app",
    label: "Authenticator",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 14 }),
    description: "Use your authenticator app (Google Authenticator, Authy, etc.)"
  },
  {
    id: "sms",
    label: "SMS Code",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 14 }),
    description: "We'll send a 6-digit code to your registered phone number."
  },
  {
    id: "email",
    label: "Email Code",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
    description: "We'll send a 6-digit code to alex@salesforge.io"
  }
];
function QrCodeIllustration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        className: "opacity-70",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "4",
              y: "4",
              width: "28",
              height: "28",
              rx: "3",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "11",
              y: "11",
              width: "14",
              height: "14",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "48",
              y: "4",
              width: "28",
              height: "28",
              rx: "3",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "55",
              y: "11",
              width: "14",
              height: "14",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "4",
              y: "48",
              width: "28",
              height: "28",
              rx: "3",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "11",
              y: "55",
              width: "14",
              height: "14",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "40",
              y: "40",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "48",
              y: "40",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "56",
              y: "40",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "64",
              y: "40",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "40",
              y: "48",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "56",
              y: "48",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "40",
              y: "56",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "48",
              y: "56",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "64",
              y: "56",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "48",
              y: "64",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "64",
              y: "64",
              width: "5",
              height: "5",
              rx: "1",
              fill: "currentColor",
              className: "text-foreground"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center leading-relaxed max-w-[200px]", children: "Scan with your authenticator app, then enter the 6-digit code below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[11px] text-foreground font-mono tracking-wider", children: "SFCRM-A3X7-K9P2-M1QR" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Or enter this setup key manually" })
  ] });
}
function TwoFactorPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("app");
  const [value, setValue] = reactExports.useState("");
  const [trustDevice, setTrustDevice] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
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
  const activeTabData = tabs.find((t) => t.id === activeTab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Two-Factor Auth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Enhanced account security" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: "flex gap-1 p-1 rounded-xl bg-muted/50 border border-border/50",
            children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setActiveTab(tab.id);
                  setValue("");
                },
                className: `flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg text-[11px] font-medium transition-smooth ${activeTab === tab.id ? "bg-background shadow-subtle text-foreground border border-border/50" : "text-muted-foreground hover:text-foreground"}`,
                "data-ocid": `twofa.${tab.id}.tab`,
                children: [
                  tab.icon,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: tab.label.split(" ")[0] })
                ]
              },
              tab.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.2 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: activeTabData.description }),
              activeTab === "app" && /* @__PURE__ */ jsxRuntimeExports.jsx(QrCodeIllustration, {}),
              activeTab !== "app" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-muted/40 border border-border/50 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center", children: activeTab === "sms" ? "Code sent to •••• •••• 4291" : "Code sent to alex@salesforge.io" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground mb-3 text-center", children: "Enter 6-digit code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InputOTP,
                  {
                    maxLength: 6,
                    value,
                    onChange: setValue,
                    "data-ocid": "twofa.code.input",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPGroup, { className: "gap-2", children: [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: {
                          delay: i * 0.04,
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
                ) })
              ] })
            ]
          },
          activeTab
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              id: "trustDevice",
              checked: trustDevice,
              onCheckedChange: (c) => setTrustDevice(!!c),
              "data-ocid": "twofa.trust_device.checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "trustDevice",
              className: "text-xs text-muted-foreground cursor-pointer",
              children: "Trust this device for 30 days"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full h-10 font-medium",
            disabled: value.length < 6 || isLoading,
            onClick: handleVerify,
            "data-ocid": "twofa.verify.submit_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "flex items-center gap-2",
                "data-ocid": "twofa.loading_state",
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
                children: "Verify Identity"
              },
              "text"
            ) })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
            "Can't access your",
            " ",
            activeTab === "app" ? "authenticator app" : activeTab === "sms" ? "phone" : "email",
            "?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-primary hover:underline font-medium",
                "data-ocid": "twofa.lost_access.button",
                children: "Use backup code"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/auth/login",
              className: "inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors",
              "data-ocid": "twofa.back_to_login.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 12 }),
                "Back to sign in"
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  TwoFactorPage as default
};
