import { useState } from 'react'

import { TextField, Card, Button, Typography } from '@/components/ui'
import s from '@/components/demo/SignUpDemo/SignUpDemo.module.css'


export const SignUpDemo = () => {
  const [agree, setAgree] = useState(false)

  return (
    <Card className={s.card}>
      <Typography variant={"h1"} as={"h1"}>
        Sign up
      </Typography>

      <form>
        <TextField
          label={"Username"}
          placeholder={"Enter username"}
        />

        <TextField
          label={"Email"}
          placeholder={"Enter email"}
          error={"Invalid email"}
        />

        <TextField
          label={"Password"}
          placeholder={"Enter password"}
          mode={"password"}
        />

        <TextField
          label={"Confirm password"}
          placeholder={"Repeat password"}
          mode={"password"}
        />

        {/* <div className={s.policy}>
          <Checkbox
            checked={agree}
            onCheckedChangeAction={setAgree}
          />
          <Typography variant={"small_text"}>
            I agree with the privacy policy
          </Typography>
        </div> */}

        <Button fullwidth disabled={!agree}>
          Create account
        </Button>
      </form>
    </Card>
  )
}