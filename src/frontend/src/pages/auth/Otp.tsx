import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, MailCheck, RefreshCw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const RESEND_COOLDOWN = 60;

function OtpPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current!);
          setCanResend(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
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
          clearInterval(timerRef.current!);
          setCanResend(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
          <MailCheck size={22} className="text-primary" />
        </div>
        <h2 className="font-display font-bold text-2xl text-foreground">
          Verify your email
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          We sent a 6-digit code to{" "}
          <span className="font-medium text-foreground">
            alex@salesforge.io
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center space-y-2"
      >
        <InputOTP
          maxLength={6}
          value={value}
          onChange={setValue}
          data-ocid="otp.code.input"
        >
          <InputOTPGroup className="gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.05,
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
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center gap-1.5 text-[12px]"
      >
        <span className="text-muted-foreground">Didn't receive the code?</span>
        <AnimatePresence mode="wait">
          {canResend ? (
            <motion.button
              key="resend"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleResend}
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              data-ocid="otp.resend.button"
            >
              <RefreshCw size={11} />
              Resend code
            </motion.button>
          ) : (
            <motion.span
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground"
              data-ocid="otp.countdown"
            >
              Resend in{" "}
              <span className="font-medium text-foreground tabular-nums">
                {countdown}s
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          className="w-full h-10 font-medium"
          disabled={value.length < 6 || isLoading}
          onClick={handleVerify}
          data-ocid="otp.verify.submit_button"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
                data-ocid="otp.loading_state"
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
                Verify & Continue
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-xl bg-muted/40 border border-border/50 px-4 py-3"
      >
        <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
          The code expires in{" "}
          <span className="font-medium text-foreground">10 minutes</span>. Make
          sure to check your spam folder.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/auth/login"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center"
          data-ocid="otp.back_to_login.link"
        >
          <ArrowLeft size={14} />
          Back to sign in
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default OtpPage;
