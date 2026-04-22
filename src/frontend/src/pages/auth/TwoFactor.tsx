import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Shield,
  Smartphone,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type TabId = "app" | "sms" | "email";

const tabs: {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    id: "app",
    label: "Authenticator",
    icon: <Smartphone size={14} />,
    description:
      "Use your authenticator app (Google Authenticator, Authy, etc.)",
  },
  {
    id: "sms",
    label: "SMS Code",
    icon: <MessageSquare size={14} />,
    description: "We'll send a 6-digit code to your registered phone number.",
  },
  {
    id: "email",
    label: "Email Code",
    icon: <Mail size={14} />,
    description: "We'll send a 6-digit code to alex@salesforge.io",
  },
];

function QrCodeIllustration() {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="w-32 h-32 rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30 relative overflow-hidden">
        {/* Mock QR code pattern */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="opacity-70"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="4"
            width="28"
            height="28"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-foreground"
          />
          <rect
            x="11"
            y="11"
            width="14"
            height="14"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="48"
            y="4"
            width="28"
            height="28"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-foreground"
          />
          <rect
            x="55"
            y="11"
            width="14"
            height="14"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="4"
            y="48"
            width="28"
            height="28"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-foreground"
          />
          <rect
            x="11"
            y="55"
            width="14"
            height="14"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="40"
            y="40"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="48"
            y="40"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="56"
            y="40"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="64"
            y="40"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="40"
            y="48"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="56"
            y="48"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="40"
            y="56"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="48"
            y="56"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="64"
            y="56"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="48"
            y="64"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
          <rect
            x="64"
            y="64"
            width="5"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>
      <p className="text-[11px] text-muted-foreground text-center leading-relaxed max-w-[200px]">
        Scan with your authenticator app, then enter the 6-digit code below
      </p>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
        <code className="text-[11px] text-foreground font-mono tracking-wider">
          SFCRM-A3X7-K9P2-M1QR
        </code>
      </div>
      <p className="text-[10px] text-muted-foreground">
        Or enter this setup key manually
      </p>
    </div>
  );
}

function TwoFactorPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("app");
  const [value, setValue] = useState("");
  const [trustDevice, setTrustDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (value.length < 6) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    navigate({ to: "/dashboard" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <Shield size={22} className="text-primary" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl text-foreground">
            Two-Factor Auth
          </h2>
          <p className="text-xs text-muted-foreground">
            Enhanced account security
          </p>
        </div>
      </motion.div>

      {/* Method tabs */}
      <motion.div
        variants={itemVariants}
        className="flex gap-1 p-1 rounded-xl bg-muted/50 border border-border/50"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setValue("");
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg text-[11px] font-medium transition-smooth ${
              activeTab === tab.id
                ? "bg-background shadow-subtle text-foreground border border-border/50"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-ocid={`twofa.${tab.id}.tab`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            {activeTabData.description}
          </p>

          {activeTab === "app" && <QrCodeIllustration />}
          {activeTab !== "app" && (
            <div className="rounded-xl bg-muted/40 border border-border/50 px-4 py-3">
              <p className="text-[11px] text-muted-foreground text-center">
                {activeTab === "sms"
                  ? "Code sent to •••• •••• 4291"
                  : "Code sent to alex@salesforge.io"}
              </p>
            </div>
          )}

          <div>
            <p className="text-xs font-medium text-foreground mb-3 text-center">
              Enter 6-digit code
            </p>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={setValue}
                data-ocid="twofa.code.input"
              >
                <InputOTPGroup className="gap-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.04,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <InputOTPSlot
                        index={i}
                        className="w-10 h-12 text-lg font-display font-bold border-2 rounded-xl transition-smooth data-[active]:border-primary data-[active]:ring-2 data-[active]:ring-primary/20"
                      />
                    </motion.div>
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <Checkbox
          id="trustDevice"
          checked={trustDevice}
          onCheckedChange={(c) => setTrustDevice(!!c)}
          data-ocid="twofa.trust_device.checkbox"
        />
        <Label
          htmlFor="trustDevice"
          className="text-xs text-muted-foreground cursor-pointer"
        >
          Trust this device for 30 days
        </Label>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          className="w-full h-10 font-medium"
          disabled={value.length < 6 || isLoading}
          onClick={handleVerify}
          data-ocid="twofa.verify.submit_button"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
                data-ocid="twofa.loading_state"
              >
                <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Verifying...
              </motion.span>
            ) : (
              <motion.span
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Verify Identity
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center space-y-2">
        <p className="text-[11px] text-muted-foreground">
          Can't access your{" "}
          {activeTab === "app"
            ? "authenticator app"
            : activeTab === "sms"
              ? "phone"
              : "email"}
          ?{" "}
          <button
            type="button"
            className="text-primary hover:underline font-medium"
            data-ocid="twofa.lost_access.button"
          >
            Use backup code
          </button>
        </p>
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
          data-ocid="twofa.back_to_login.link"
        >
          <ArrowLeft size={12} />
          Back to sign in
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default TwoFactorPage;
